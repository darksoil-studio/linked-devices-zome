{
  description = "Template for Holochain app development";

  inputs = {
    holonix.url = "github:holochain/holonix/main-0.3";

    nixpkgs.follows = "holonix/nixpkgs";
    flake-parts.follows = "holonix/flake-parts";

    hc-infra.url = "github:holochain-open-dev/infrastructure";
    p2p-shipyard.url = "github:darksoil-studio/p2p-shipyard";
    playground.url = "github:darksoil-studio/holochain-playground";
    scaffolding.url = "github:holochain-open-dev/templates";

    profiles.url = "github:holochain-open-dev/profiles/nixify";
  };

  nixConfig = {
    extra-substituters = [
      "https://holochain-open-dev.cachix.org"
      "https://darksoil-studio.cachix.org"
    ];
    extra-trusted-public-keys = [
      "holochain-open-dev.cachix.org-1:3Tr+9in6uo44Ga7qiuRIfOTFXog+2+YbyhwI/Z6Cp4U="
      "darksoil-studio.cachix.org-1:UEi+aujy44s41XL/pscLw37KEVpTEIn8N/kn7jO8rkc="
    ];
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        ./zomes/integrity/linked_devices/zome.nix
        ./zomes/coordinator/linked_devices/zome.nix
        # Just for testing purposes
        ./workdir/dna.nix
        ./workdir/happ.nix
      ];

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.hc-infra.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];

          packages = [
            inputs'.scaffolding.packages.hc-scaffold-zome-template
            inputs'.p2p-shipyard.packages.hc-pilot
            inputs'.playground.packages.hc-playground
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
