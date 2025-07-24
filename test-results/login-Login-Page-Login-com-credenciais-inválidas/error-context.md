# Page snapshot

```yaml
- main:
  - img "Race & Friends"
  - heading "Login" [level=1]
  - alert: Email ou senha inválidos
  - text: Email
  - textbox "Email": email@falso.com
  - text: Senha
  - textbox "Senha": senhaerrada
  - button "Entrar"
  - link "Não tem uma conta? Cadastre-se":
    - /url: /register
- alert: Login - Race & Friends
```