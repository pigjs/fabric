import eslint from './eslint';
import verifyCommit from './git/verifyCommit';
import verifyMergeBranch from './git/verifyMergeBranch';
import prettier from './prettier';
import stylelint from './stylelint';

export default {
    eslint,
    prettier,
    stylelint,
    verifyCommit,
    verifyMergeBranch
};
