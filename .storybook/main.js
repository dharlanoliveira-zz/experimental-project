module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-links/register',
        '@storybook/addon-knobs',
        'storybook-addon-material-ui/register'
    ],
};