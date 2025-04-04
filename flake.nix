{
  description = "Template for Holochain app development";

  inputs = {
    holonix.url = "github:holochain/holonix";

    nixpkgs.follows = "holonix/nixpkgs";
    flake-parts.follows = "holonix/flake-parts";

    tnesh-stack.url = "github:darksoil-studio/tnesh-stack/main-0.5";
    p2p-shipyard.url = "github:darksoil-studio/p2p-shipyard/main-0.5";
    playground.url = "github:darksoil-studio/holochain-playground/main-0.5";
  };

  nixConfig = {
    extra-substituters = [
      "https://holochain-ci.cachix.org"
      "https://darksoil-studio.cachix.org"
    ];
    extra-trusted-public-keys = [
      "holochain-ci.cachix.org-1:5IUSkZc0aoRS53rfkvH9Kid40NpyjwCMCzwRTXy+QN8="
      "darksoil-studio.cachix.org-1:UEi+aujy44s41XL/pscLw37KEVpTEIn8N/kn7jO8rkc="
    ];
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        ./zomes/integrity/linked_devices/zome.nix
        ./zomes/coordinator/linked_devices/zome.nix
        ./zomes/integrity/example/zome.nix
        ./zomes/coordinator/example/zome.nix
        # Just for testing purposes
        ./workdir/dna.nix
        ./workdir/happ.nix
      ];

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.tnesh-stack.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];

          packages = [
            inputs'.tnesh-stack.packages.holochain
            inputs'.tnesh-stack.packages.hc-scaffold-zome
            inputs'.p2p-shipyard.packages.hc-pilot
            inputs'.playground.packages.hc-playground
          ];
        };
        devShells.npm-ci = inputs'.tnesh-stack.devShells.synchronized-pnpm;

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.tnesh-stack.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "linked-devices-zome \
                --integrity-zome-name linked_devices_integrity \
                --coordinator-zome-name linked_devices \
                --remote-zome-git-url github:darksoil-studio/linked-devices-zome \
                --remote-npm-package-name @darksoil-studio/linked-devices-zome \
                --remote-zome-git-branch main-0.5 \
                --context-element linked-devices-context \
                --context-element-import @darksoil-studio/linked-devices-zome/dist/elements/linked-devices-context.js " 
          '';
        };
      };
    };
}
