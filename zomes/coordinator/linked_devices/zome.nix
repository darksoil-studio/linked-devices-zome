{ inputs, ... }:

{
  perSystem =
    { inputs'
    , system
    , self'
    , ...
    }: rec {
      packages.linked_devices = inputs.hc-infra.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        cargoArtifacts = inputs'.hc-infra.packages.zomeCargoArtifacts;
      };

      # Test only this zome and its integrity in isolation
      checks.linked_devices = inputs.hc-infra.outputs.builders.${system}.sweettest {
        workspacePath = inputs.self.outPath;
        dna = (inputs.hc-infra.outputs.builders.${system}.dna {
          dnaManifest = builtins.toFile "dna.yaml" ''
            ---
            manifest_version: "1"
            name: test_dna
            integrity:
              network_seed: ~
              properties: ~
              origin_time: 1709638576394039
              zomes: 
                - name: linked_devices_integrity
            coordinator:
              zomes:
                - name: linked_devices
                  hash: ~
                  dependencies: 
                    - name: linked_devices_integrity
                  dylib: ~
          '';
          zomes = {
            linked_devices_integrity = self'.packages.linked_devices_integrity;
            linked_devices = self'.packages.linked_devices;
          };
        }).meta.debug;
        crateCargoToml = ./Cargo.toml;
        cargoArtifacts = inputs'.hc-infra.packages.holochainCargoArtifacts;
      };

    };
}

