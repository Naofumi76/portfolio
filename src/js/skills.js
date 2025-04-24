export default function () {
	const backendItems = ['Python', 'Golang', 'SQL', 'SQLite3', 'GraphQL', 'Rust'];
	const frontendItems = ['HTML', 'CSS', 'JavaScript'];


	return `
    <div class="skills">
        <h2>Here you can see what I'm most familiar with for development purposes.</h2>
        <br>
        <h3>Language and tools</h3>
        <div class="scroll-container">

            <div class="item item1"> Python 
            <br>
                <img src="img/languages-icons/icons8-python-240.png" alt="python" style="height: 50px;">
            </div>

            <div class="item item2"> Golang 
                <br>
                <img src="img/languages-icons/golang.png" alt="golang" style="height: 50px;">
            </div>

            <div class="item item3"> SQL 
                <br>
                <img src="img/languages-icons/icons8-sql-96.png" alt="sql" style="height: 50px;">
            </div>

            <div class="item item4"> SQLite3 
                <br>
                <img src="img/languages-icons/icons8-sqlite.svg" alt="sql" style="height: 50px;">
            </div>

            <div class="item item5"> GraphQL 
                <br>
                <img src="img/languages-icons/icons8-graphql-144.png" alt="graphql" style="height: 50px;">
            </div>

            <div class="item item6"> Rust 
                <br>
                <img src="img/languages-icons/icons8-rust-96.png" alt="rust" style="height: 50px;">
            </div>

            <div class="item item7"> Django 
                <br>
                <img src="img/languages-icons/django.png" alt="django" style="height: 50px;">
            </div>

            <div class="item item8"> HTML 
                <br>
                <img src="img/languages-icons/icons8-html.svg" alt="html" style="height: 50px;">
            </div>

            <div class="item item9"> CSS 
                <br>
                <img src="img/languages-icons/icons8-css.svg" alt="css" style="height: 50px;">
            </div>

            <div class="item item10"> JavaScript 
                <br>
                <img src="img/languages-icons/icons8-javascript.svg" alt="javascript" style="height: 50px;">
            </div>
            
        </div>
    </div>
    `;
}
