interface GitCommitIdFunction {
  (opts?: { cwd: string }): string
}
declare const gitCommitId: GitCommitIdFunction

declare module 'git-commit-id' {
  export const gitCommitId: GitCommitIdFunction
}
