# Modificadores de Acesso

## Público

- Nomenclatura: public
- Definição: Membros declarados como públicos são acessíveis de qualquer lugar, tanto dentro da própria classe quanto por outras classes que tenham uma instância dessa classe. Não há restrições de acesso. Isso significa que você pode acessar membros públicos de qualquer lugar no código

## Privado

- Nomenclatura: private
- Definição: Membros declarados como privados são acessíveis apenas dentro da própria classe. Eles não podem ser acessados por subclasses ou outras classes. O encapsulamento é uma razão comum para usar o modificador private, uma vez que oculta os detalhes internos da implementação da classe.

## Protegido:

- Nomenclatura: protected
- Definição: Membros declarados como protegidos são acessíveis dentro da própria classe, em suas subclasses (classes que herdam da classe que contém o membro protegido)

## Getters ("get"): 

- Um método "get" é usado para obter o valor de um atributo de uma classe. Ele permite que você acesse o valor de um atributo como se fosse uma propriedade, enquanto mantém o controle sobre a lógica de acesso. Isso é útil quando você quer realizar alguma ação ou validação antes de retornar o valor do atributo.

## Setters ("set"): 

- Um método "set" é usado para atribuir um valor a um atributo de uma classe. Ele permite que você defina o valor de um atributo como se fosse uma atribuição direta, mas novamente, você tem controle sobre a lógica associada. Isso é útil quando você deseja realizar validações ou aplicar lógica específica ao definir o valor de um atributo.


