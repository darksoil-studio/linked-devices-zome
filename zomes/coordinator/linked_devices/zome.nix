{ inputs, ... }:

{
  perSystem = { inputs', system, self', ... }: {
    packages.linked_devices =
      inputs.holochain-utils.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };

  };
}

