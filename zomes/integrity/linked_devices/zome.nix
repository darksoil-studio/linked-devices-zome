{ inputs, ... }:

{
  perSystem = { inputs', system, ... }: {
    packages.linked_devices_integrity =
      inputs.holochain-utils.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
  };
}

