{
  description = "Template for Holochain app development";

  inputs = {
    holonix.url = "github:holochain/holonix/main-0.3";

    nixpkgs.follows = "holonix/nixpkgs";
    flake-parts.follows = "holonix/flake-parts";

    hc-infra.url = "github:holochain-open-dev/infrastructure";
    scaffolding.url = "github:holochain-open-dev/templates";

    profiles.url = "github:holochain-open-dev/profiles/nixify";
  };
  
  nixConfig = {
    extra-substituters = [
      "https://holochain-open-dev.cachix.org"
    ];	
  	extra-trusted-public-keys = [
  	  "holochain-open-dev.cachix.org-1:3Tr+9in6uo44Ga7qiuRIfOTFXog+2+YbyhwI/Z6Cp4U="
    ];
  };


  outputs = inputs:
    inputs.flake-parts.lib.mkFlake
      {
        inherit inputs;
      }
      {
        imports = [
          ./zomes/integrity/linked_devices/zome.nix
          ./zomes/coordinator/linked_devices/zome.nix
          # Just for testing purposes
          ./workdir/dna.nix
          ./workdir/happ.nix
        ];
      
        systems = builtins.attrNames inputs.holonix.devShells;
        perSystem =
          { inputs'
          , config
          , pkgs
          , system
          , ...
          }: {
            devShells.default = pkgs.mkShell {
              inputsFrom = [ 
                inputs'.hc-infra.devShells.synchronized-pnpm
                inputs'.holonix.devShells.default
              ];

              packages = [
                inputs'.scaffolding.packages.hc-scaffold-zome-template
              ];
            };

            packages.scaffold = pkgs.symlinkJoin {
              name = "scaffold-remote-zome";
              paths = [ inputs'.hc-infra.packages.scaffold-remote-zome ];
              buildInputs = [ pkgs.makeWrapper ];
              postBuild = ''
                wrapProgram $out/bin/scaffold-remote-zome \
                  --add-flags "linked-devices \
                    --integrity-zome-name linked_devices_integrity \
                    --coordinator-zome-name linked_devices \
                    --remote-zome-git-url github:holochain-open-dev/linked-devices \
                    --remote-npm-package-name linked-devices \
                    --remote-npm-package-path ui \
                    --remote-zome-git-branch main" 
              '';
            };
          };
      };
}
