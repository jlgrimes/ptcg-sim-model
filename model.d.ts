type Zone = 'hand' | 'discard' | 'deck';
type TargetedPlayer = 'myself' | 'opponent' | 'both';

interface ZoneSelect {
  zone: Zone;
  scope: 'top' | 'bottom' | 'all';
  count?: number;
}

type AvailableActions = 'shuffle' | 'select' | 'move';

interface CardModel {
  name: string;
  instructions: (Instruction | Assert)[];
}

interface Instruction {
  player: TargetedPlayer;
  action: AvailableActions;
  // self is whatever player is defined as
  payload: 'self' | 'selected' | ZoneSelect;
}

interface Assert {
  condition: 'previous-action-valid';
}
