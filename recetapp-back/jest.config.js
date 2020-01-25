module.exports = {
    testEnvironment: 'node',
    transform: { '^.+\\.ts$': 'ts-jest' },
    testRegex: '\\.spec\\.ts$',
    moduleFileExtensions: ['ts', 'js', 'json'],
    moduleNameMapper: {
        '^@config$': '<rootDir>/config/local',
        '^@api/(.*)$': '<rootDir>/api/$1',
    },
    coverageDirectory: './coverage/server',
    coverageReporters: ['json', 'lcov', 'text'],
};
