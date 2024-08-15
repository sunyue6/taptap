'use strict';

module.exports = {

    types: [
        {value: 'feat', name: 'feat:    A new feature'},
        {value: 'fix', name: 'fix:    Fix a bug'},
        {value: 'docs', name: 'docs:    Documentation changes only'},
        {value: 'style', name: 'style:    Code formatting, e.g., spaces, semicolons'},
        {value: 'refactor', name: 'refactor:    Code refactoring, not a feature or bug fix'},
        {value: 'perf', name: 'perf:    Performance improvements'},
        {value: 'test', name: 'test:    Add or update tests'},
        {value: 'chore', name: 'chore:    Changes to the build process or auxiliary tools and libraries'},
        {value: 'revert', name: 'revert:    Revert to a previous commit'}
    ],

    scopes: [
        {name: 'Dashboard'},
        {name: 'Mint'},
        {name: 'Worker'},
        {name: 'Swap'},
        {name: 'Jackpot'}
    ],

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: 'Select the type of change you are committing:',
        scope: 'Select a scope (optional):',
        // used if allowCustomScopes is true
        customScope: 'Denote the SCOPE of this change:',
        subject: 'Short description:\n',
        body: 'Longer description, use "|" to break new line (optional):\n',
        breaking: 'Breaking changes description (optional):\n',
        footer: 'References to related issues, e.g., #31, #34 (optional):\n',
        confirmCommit: 'Are you sure you want to proceed with the commit?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],

    // limit subject length
    subjectLimit: 200

};
