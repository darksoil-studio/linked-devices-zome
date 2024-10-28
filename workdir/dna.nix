{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.linked_devices_test_dna =
      inputs.hc-infra.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          # Include here the zome packages for this DNA, e.g.:
          profiles_integrity = inputs'.profiles.packages.profiles_integrity;
          profiles = inputs'.profiles.packages.profiles;
          # This overrides all the "bundled" properties for the DNA manifest
          linked_devices_integrity = self'.packages.linked_devices_integrity;
          linked_devices = self'.packages.linked_devices;
        };
      };
  };
}

