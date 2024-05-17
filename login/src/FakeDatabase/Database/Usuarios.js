
const usuarios = [
    {
        id:1,
        email: 'HenriqueJoguinho@gmail.com',
        senha: "GokuMegaPower123",
        nome: 'Henrique Eduardo',
        pontos: 0,
        dataNacimento: '1999-12-12',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Toti',
            numero: "345",
            bairro: 'Centro',
            complemento: 'Casa Grande e verde'
        },
        perfil:"CLIENTE"
    },
    {
        id: 2,
        email: 'MariaSilva@gmail.com',
        senha: "SenhaForte123",
        nome: 'Maria Silva',
        pontos: 50,
        dataNacimento: '1985-05-15',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Principal',
            numero: "123",
            bairro: 'Centro',
            complemento: 'Apto 201'
        },
        perfil: "ENTREGADOR"
    },
    {
        id: 3,
        email: 'JoaoSantos@gmail.com',
        senha: "SuperSegura2024",
        nome: 'João Santos',
        pontos: 75,
        dataNacimento: '1978-02-20',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua das Flores',
            numero: "456",
            bairro: 'Jardim',
            complemento: 'Casa azul'
        },
        perfil: "GERENTE"
    },
    {
        id: 4,
        email: 'AnaPereira@gmail.com',
        senha: "Ana123456",
        nome: 'Ana Pereira',
        pontos: 20,
        dataNacimento: '1990-11-30',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua dos Andradas',
            numero: "789",
            bairro: 'Vila Nova',
            complemento: 'Apto 102'
        },
        perfil: "ADMINISTRADOR"
    },
    {
        id: 5,
        email: 'CarlosMoura@gmail.com',
        senha: "Carloz@321",
        nome: 'Carlos Moura',
        pontos: 15,
        dataNacimento: '1982-07-07',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Alegre',
            numero: "101",
            bairro: 'Centro',
            complemento: 'Casa de esquina'
        },
        perfil: "CLIENTE"
    },
    {
        id: 6,
        email: 'FernandaLima@gmail.com',
        senha: "FernandaL!ma",
        nome: 'Fernanda Lima',
        pontos: 90,
        dataNacimento: '1995-09-10',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua São José',
            numero: "202",
            bairro: 'Centro',
            complemento: 'Apto 303'
        },
        perfil: "ENTREGADOR"
    },
    {
        id: 7,
        email: 'RicardoOliveira@gmail.com',
        senha: "R1c@rdo123",
        nome: 'Ricardo Oliveira',
        pontos: 35,
        dataNacimento: '1988-03-22',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua da Paz',
            numero: "303",
            bairro: 'Boa Vista',
            complemento: 'Casa verde'
        },
        perfil: "GERENTE"
    },
    {
        id: 8,
        email: 'PaulaCosta@gmail.com',
        senha: "Paul@C0st@",
        nome: 'Paula Costa',
        pontos: 60,
        dataNacimento: '1991-06-14',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua das Palmeiras',
            numero: "404",
            bairro: 'Centro',
            complemento: 'Casa com jardim'
        },
        perfil: "ADMINISTRADOR"
    },
    {
        id: 9,
        email: 'JulianaDias@gmail.com',
        senha: "Jul1@n@2021",
        nome: 'Juliana Dias',
        pontos: 40,
        dataNacimento: '1983-08-19',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Bela Vista',
            numero: "505",
            bairro: 'Centro',
            complemento: 'Apto 404'
        },
        perfil: "CLIENTE"
    },
    {
        id: 10,
        email: 'MarcosAlves@gmail.com',
        senha: "Marcos@lv3s",
        nome: 'Marcos Alves',
        pontos: 25,
        dataNacimento: '1975-12-24',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Nova',
            numero: "606",
            bairro: 'Centro',
            complemento: 'Casa ao lado da padaria'
        },
        perfil: "ENTREGADOR"
    },
    {
        id: 11,
        email: 'LauraSouza@gmail.com',
        senha: "L@uraSouz@",
        nome: 'Laura Souza',
        pontos: 80,
        dataNacimento: '1992-04-03',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Esperança',
            numero: "707",
            bairro: 'Centro',
            complemento: 'Casa grande'
        },
        perfil: "GERENTE"
    },
    {
        id: 11,
        email: 'LucasFerreira@gmail.com',
        senha: "SenhaSegura123",
        nome: 'Lucas Ferreira',
        pontos: 10,
        dataNacimento: '1990-01-01',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Alegria',
            numero: "100",
            bairro: 'Centro',
            complemento: 'Apto 1'
        },
        perfil: "CLIENTE"
    },
    {
        id: 12,
        email: 'MarianaAlmeida@gmail.com',
        senha: "Senha12345",
        nome: 'Mariana Almeida',
        pontos: 20,
        dataNacimento: '1985-02-02',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua das Flores',
            numero: "200",
            bairro: 'Centro',
            complemento: 'Casa'
        },
        perfil: "ENTREGADOR"
    },
    {
        id: 13,
        email: 'PedroSouza@gmail.com',
        senha: "123SenhaPedro",
        nome: 'Pedro Souza',
        pontos: 30,
        dataNacimento: '1980-03-03',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua da Paz',
            numero: "300",
            bairro: 'Centro',
            complemento: 'Apto 2'
        },
        perfil: "GERENTE"
    },
    {
        id: 14,
        email: 'JuliaMendes@gmail.com',
        senha: "SenhaJulia321",
        nome: 'Julia Mendes',
        pontos: 40,
        dataNacimento: '1995-04-04',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua da Harmonia',
            numero: "400",
            bairro: 'Centro',
            complemento: 'Casa'
        },
        perfil: "ADMINISTRADOR"
    },
    {
        id: 15,
        email: 'FelipeSantos@gmail.com',
        senha: "FelipeS123",
        nome: 'Felipe Santos',
        pontos: 50,
        dataNacimento: '1992-05-05',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Nova',
            numero: "500",
            bairro: 'Centro',
            complemento: 'Apto 3'
        },
        perfil: "CLIENTE"
    },
    {
        id: 16,
        email: 'BiancaOliveira@gmail.com',
        senha: "BiancaOliv123",
        nome: 'Bianca Oliveira',
        pontos: 60,
        dataNacimento: '1991-06-06',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Bela Vista',
            numero: "600",
            bairro: 'Centro',
            complemento: 'Casa'
        },
        perfil: "ENTREGADOR"
    },
    {
        id: 17,
        email: 'RenatoBarros@gmail.com',
        senha: "RenatoB321",
        nome: 'Renato Barros',
        pontos: 70,
        dataNacimento: '1988-07-07',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Esperança',
            numero: "700",
            bairro: 'Centro',
            complemento: 'Apto 4'
        },
        perfil: "GERENTE"
    },
    {
        id: 18,
        email: 'TatianeCosta@gmail.com',
        senha: "TatianeC123",
        nome: 'Tatiane Costa',
        pontos: 80,
        dataNacimento: '1987-08-08',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Primavera',
            numero: "800",
            bairro: 'Centro',
            complemento: 'Casa'
        },
        perfil: "ADMINISTRADOR"
    },
    {
        id: 19,
        email: 'AndreFerreira@gmail.com',
        senha: "AndreF123",
        nome: 'Andre Ferreira',
        pontos: 90,
        dataNacimento: '1986-09-09',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Verão',
            numero: "900",
            bairro: 'Centro',
            complemento: 'Apto 5'
        },
        perfil: "CLIENTE"
    },
    {
        id: 20,
        email: 'GabrielaMartins@gmail.com',
        senha: "GabrielaM123",
        nome: 'Gabriela Martins',
        pontos: 100,
        dataNacimento: '1984-10-10',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Outono',
            numero: "1000",
            bairro: 'Centro',
            complemento: 'Casa'
        },
        perfil: "ENTREGADOR"
    },
    {
        id: 21,
        email: 'RodrigoSilva@gmail.com',
        senha: "RodrigoS123",
        nome: 'Rodrigo Silva',
        pontos: 110,
        dataNacimento: '1993-11-11',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua Inverno',
            numero: "1100",
            bairro: 'Centro',
            complemento: 'Apto 6'
        },
        perfil: "GERENTE"
    },
    {
        id: 22,
        email: 'CarlaLima@gmail.com',
        senha: "CarlaL123",
        nome: 'Carla Lima',
        pontos: 120,
        dataNacimento: '1994-12-12',
        endereco: {
            cidade: 'Piraúba',
            estado: 'MG',
            rua: 'Rua da Liberdade',
            numero: "1200",
            bairro: 'Centro',
            complemento: 'Casa'
        },
        perfil: "ADMINISTRADOR"
    },

];

export default usuarios;