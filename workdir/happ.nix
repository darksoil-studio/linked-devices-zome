{ inputs, ... }:

{
  perSystem = { inputs', lib, self', system, ... }: {
    packages.linked_devices_test_happ =
      inputs.tnesh-stack.outputs.builders.${system}.happ {
        happManifest = ./happ.yaml;

        dnas = {
          # Include here the DNA packages for this hApp, e.g.:
          # my_dna = inputs'.some_input.packages.my_dna;
          # This overrides all the "bundled" properties for the hApp manifest 
          linked_devices_test = self'.packages.linked_devices_test_dna;
        };
      };
  };
}
