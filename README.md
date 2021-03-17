<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>

    <h2>login/student/email/password</h2>

    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj/login/student/{email}/{password}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Body</th>
            <th>Content</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td></td>
            <td></td>
            <td>Student's email</td>
        </tr>
        <tr>
            <td>password</td>
            <td>string</td>
            <td></td>
            <td></td>
            <td>Student's hashed password</td>
        </tr>
    </table>
    <br>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj/login/student/{email}/{password}</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>500</td>
            <td>errr</td>
            <td>JSON</td>
            <td>Error while trying to acces database</td>
        </tr>
        <tr>
            <td>200</td>
            <td>msg</td>
            <td>JSON</td>
            <td>Message in case authentification fails</td>
        </tr>
        <tr>
            <td>200</td>
            <td>student</td>
            <td>JSON</td>
            <td>Student's data in json format</td>
        </tr>
    </table>

    <h2>login/admin/email/password</h2>

    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj/login/admin/{email}/{password}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Body</th>
            <th>Content</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td></td>
            <td></td>
            <td>Admin's email</td>
        </tr>
        <tr>
            <td>password</td>
            <td>string</td>
            <td></td>
            <td></td>
            <td>Admin's hashed password</td>
        </tr>
    </table>
    <br>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj/login/student/{email}/{password}</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>500</td>
            <td>errr</td>
            <td>JSON</td>
            <td>Error while trying to acces database</td>
        </tr>
        <tr>
            <td>200</td>
            <td>msg</td>
            <td>JSON</td>
            <td>Message in case authentification fails</td>
        </tr>
        <tr>
            <td>200</td>
            <td>admin</td>
            <td>JSON</td>
            <td>Admin's data in json format</td>
        </tr>
    </table>

</body>

</html>
