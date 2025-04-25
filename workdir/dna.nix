{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.linked_devices_test_dna =
      inputs.holochain-nix-builders.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          # This overrides all the "bundled" properties for the DNA manifest
          linked_devices_integrity = self'.packages.linked_devices_integrity;
          linked_devices = self'.packages.linked_devices;

          example_integrity = self'.packages.example_integrity;
          example = self'.packages.example;
        };
      };
  };
}

