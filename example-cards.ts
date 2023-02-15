export const Marnie: CardModel = {
  name: 'Marnie',
  instructions: [
    {
      player: 'both',
      action: 'shuffle',
      payload: {
        zone: 'hand',
        scope: 'all',
      },
    },
    {
      player: 'both',
      action: 'select',
      payload: {
        zone: 'hand',
        scope: 'all',
      },
    },
    {
      player: 'both',
      action: 'move',
      payload: {
        zone: 'deck',
        scope: 'bottom',
      },
    },
    {
      condition: 'previous-action-valid',
    },
    {
      player: 'myself',
      action: 'select',
      payload: {
        zone: 'deck',
        scope: 'top',
        count: 5,
      },
    },
    {
      player: 'myself',
      action: 'move',
      payload: 'selected',
    },
    {
      player: 'opponent',
      action: 'select',
      payload: {
        zone: 'deck',
        scope: 'top',
        count: 4,
      },
    },
    {
      player: 'opponent',
      action: 'move',
      payload: 'selected',
    },
  ],
};