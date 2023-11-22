const tables = document.querySelector('.tabelas');

const createTable = () => {
    for (x = 1; x <= 10; x++){
        let t1 = document.createElement('table');
        tables.appendChild(t1);
        for (y = 0; y <= 10; y++){
            let row = document.createElement('tr');
            t1.appendChild(row);
             for(z = 0; z < 5; z++){
                let num2 = y;
                let col = document.createElement('td');
                row.appendChild(col);

                if (z == 0){
                    col.innerHTML = y;
                }
                else if( z == 1){
                    col.innerHTML = 'x';
                }
                else if( z == 2){
                    col.innerHTML = x;
                }
                else if( z == 3){
                    col.innerHTML = '=';
                }
                else{
                    col.innerHTML = num2 * x;
                }
            }
        };
    };
};  

createTable();


