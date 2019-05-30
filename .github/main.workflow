workflow "CD" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Lint" {
  uses = "nuxt/actions-yarn@master"
  needs = "Install"
  args = "run lint"
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  needs = "Lint"
  args = "run build"
}
