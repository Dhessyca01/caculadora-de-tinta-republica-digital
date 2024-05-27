export const errors = {
    invalidAreaError: {
      type: 'invalidAreaError',
      message: 'As paredes devem ter entre 1m² e 50m², por favor, verifique as áreas. Uma das paredes possui uma área inválida.'
    },
    invalidDoorWindowAreaError: {
      type: 'invalidDoorWindowAreaError',
      message: 'O total da área das portas e janelas excede 50% da área da parede. Por favor, verifique as áreas e ajuste.'
    },
    invalidWallHeightError: {
      type: 'invalidWallHeightError',
      message: 'A altura das paredes com portas deve ser pelo menos 30cm maior do que a altura da porta.'
    }
  };
