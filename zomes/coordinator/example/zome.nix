{ inputs, ... }:

{
  perSystem = { inputs', system, self', ... }: {
    packages.example =
      inputs.holochain-utils.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };

  };
}

