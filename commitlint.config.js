module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Fitur baru
        'fix',      // Bug fix
        'docs',     // Dokumentasi
        'style',    // Formatting, missing semi colons, etc
        'refactor', // Refactoring code
        'perf',     // Performance improvements
        'test',     // Menambah testing
        'build',    // Build system atau dependencies
        'ci',       // CI configuration files and scripts
        'chore',    // Maintenance tasks
        'revert'    // Revert commit
      ]
    ]
  }
};
