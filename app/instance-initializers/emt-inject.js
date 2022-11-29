export function initialize(appInstance) {
  appInstance.inject(
    'component:models-table',
    'themeInstance',
    `theme:ember-bootstrap-v3`
  );
  appInstance.inject(
    'component:models-table-server-paginated',
    'themeInstance',
    `theme:ember-bootstrap-v3`
  );
}

export default {
  name: 'emt-inject',
  initialize,
};
