const cursos = [
    {
        "titulo": "Curso de Python para Desenvolvimento Web",
        "cargaHoraria": "15 horas",
        "descricao": "Este curso aborda o uso do Python para desenvolvimento web, ensinando como criar sites dinâmicos e aplicativos utilizando frameworks como Flask e Django. Aprenda a manipular bases de dados, trabalhar com autenticação de usuários e a integração com APIs. Ideal para quem deseja entrar no mercado de desenvolvimento web com uma linguagem versátil e popular.",
        "imagem": "https://www.python.org/static/community_logos/python-logo.png",
        "tags": ["python", "web development", "javascript", "fullstack", "banco de dados"]
    },
    {
        "titulo": "Curso de C++ para Desenvolvimento Web",
        "cargaHoraria": "39 horas",
        "descricao": "Explore como o C++ pode ser utilizado para o desenvolvimento web, com foco em desempenho e eficiência. Aprenda a trabalhar com servidores de alta performance e otimizar aplicações para lidar com grandes quantidades de tráfego. O curso também cobre frameworks populares e melhores práticas em segurança web.",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        "tags": ["c++", "web development", "backend", "banco de dados", "javascript"]
    },
    {
        "titulo": "Curso de C++ para DevOps",
        "cargaHoraria": "12 horas",
        "descricao": "Neste curso, você aprenderá como aplicar o C++ no ambiente DevOps, integrando ferramentas de automação e otimização de processos. Explore como otimizar o desempenho de pipelines e scripts em sistemas de infraestrutura e entender o papel do C++ na criação de ferramentas personalizadas de automação.",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        "tags": ["c++", "devops", "backend", "estrutura de dados", "cloud computing"]
    },
    {
        "titulo": "Curso de JavaScript para DevOps",
        "cargaHoraria": "18 horas",
        "descricao": "Este curso explora a utilização do JavaScript no ambiente DevOps. Aprenda a automatizar tarefas, criar scripts eficientes e integrar ferramentas de CI/CD (Continuous Integration/Continuous Deployment) para melhorar o fluxo de trabalho. Ideal para desenvolvedores e administradores de sistemas que desejam maximizar a eficiência operacional.",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        "tags": ["javascript", "devops", "backend", "cloud computing", "algoritmos"]
    },
    {
        "titulo": "Curso de Java para Ciência de Dados",
        "cargaHoraria": "53 horas",
        "descricao": "Aprenda a utilizar Java no campo da Ciência de Dados, desde a manipulação de grandes volumes de dados até a criação de modelos preditivos. O curso abrange bibliotecas e frameworks populares de Machine Learning e técnicas avançadas de análise de dados. Ideal para profissionais que já dominam Java e desejam expandir suas habilidades em Data Science.",
        "imagem": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
        "tags": ["java", "data science", "machine learning", "banco de dados", "cloud computing"]
    },
    {
        "titulo": "Curso de C# para Desenvolvimento Mobile",
        "cargaHoraria": "12 horas",
        "descricao": "Este curso foca no uso de C# para o desenvolvimento de aplicativos mobile, abordando a criação de aplicações nativas e híbridas com frameworks como Xamarin. Aprenda a desenvolver apps que funcionam em múltiplas plataformas (iOS e Android) e a integrar funcionalidades modernas, como notificações e autenticação de usuários.",
        "imagem": "https://media.licdn.com/dms/image/v2/D4D12AQEfpm1hZiEN6Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673639331003?e=1730937600&v=beta&t=n-k7E2zciGmcrMW0SxvmL1bZKi-APrV4tzLy6tvtWk8",
        "tags": ["c#", "mobile development", "cloud computing", "frontend", "algoritmos"]
    },
    {
        "titulo": "Curso de C# para Machine Learning",
        "cargaHoraria": "30 horas",
        "descricao": "Descubra como o C# pode ser utilizado no campo do Machine Learning. O curso ensina a aplicar algoritmos de aprendizado de máquina utilizando frameworks como ML.NET, integrando o poder da inteligência artificial em suas aplicações de forma eficiente e escalável.",
        "imagem": "https://media.licdn.com/dms/image/v2/D4D12AQEfpm1hZiEN6Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673639331003?e=1730937600&v=beta&t=n-k7E2zciGmcrMW0SxvmL1bZKi-APrV4tzLy6tvtWk8",
        "tags": ["c#", "machine learning", "backend", "estrutura de dados", "algoritmos"]
    },
    {
        "titulo": "Curso de Python para Ciência de Dados",
        "cargaHoraria": "44 horas",
        "descricao": "Este curso ensina como aplicar o Python em projetos de Ciência de Dados. Aprenda a trabalhar com grandes volumes de dados, aplicar técnicas de Machine Learning e visualização de dados, utilizando bibliotecas populares como Pandas, NumPy e Scikit-learn. Ideal para quem deseja seguir carreira na área de Data Science.",
        "imagem": "https://www.python.org/static/community_logos/python-logo.png",
        "tags": ["python", "data science", "machine learning", "banco de dados", "web development"]
    },
    {
        "titulo": "Curso de C++ para Machine Learning",
        "cargaHoraria": "20 horas",
        "descricao": "Neste curso, você aprenderá como utilizar o C++ para desenvolver soluções de Machine Learning, com foco em eficiência e performance. Explore como implementar algoritmos de aprendizado de máquina e criar sistemas preditivos otimizados para o processamento de grandes volumes de dados.",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        "tags": ["c++", "machine learning", "cloud computing", "data science", "backend"]
    },
    {
        "titulo": "Curso de JavaScript para Ciência de Dados",
        "cargaHoraria": "47 horas",
        "descricao": "Este curso aborda a aplicação do JavaScript na Ciência de Dados, permitindo a manipulação e visualização de dados de forma interativa. Aprenda a criar dashboards dinâmicos e integrar com APIs para análise em tempo real. O curso foca em bibliotecas como D3.js e Node.js para construir soluções robustas de Data Science.",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        "tags": ["javascript", "data science", "web development", "machine learning", "frontend"]
    }
];
