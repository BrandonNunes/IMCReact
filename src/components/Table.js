import React from 'react';

const Table = () => {
    return(
        <table border="2">
            <thead>
                <th>Classificação</th>
                <th>IMC</th>
            </thead>
            <tbody>
                <tr><td>Abaixo do peso</td><td>Abaixo de 18,5</td></tr>
                <tr><td>Peso normal</td><td>Entre 18,5 - 24,9</td></tr>
                <tr><td>Sobrepeso</td><td>Entre 25 - 29,9 </td></tr>
                <tr><td>Obesidade grau I</td><td>Entre 30 - 34,9</td></tr>
                <tr><td>Obesidade grau II</td><td>Entre 35 - 39,9</td></tr>
                <tr><td>Obesidade grau III ou Morbida</td><td>40 ou Maior</td></tr>
            </tbody>
        </table>
    )
}

export default Table;