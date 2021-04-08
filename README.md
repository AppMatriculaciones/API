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
            <td>err</td>
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
            <td>err</td>
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
    </br></br>
    <h1>CAREER CRUD</h1>
    </br>
    <h2>/career/create/</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request (JSON)</th>
        </tr>
        <tr>
            <th colspan="5">POST appmatriculacioaaj/career/create/</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>null</td>
            <td>null</td>
            <td>null</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST appmatriculacioaaj/career/create/</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>Code</td>
            <td>string</td>
            <td>Code from the new career</td>
        </tr>
    </table>
    </br>
    <h2>/career/delete/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE appmatriculacioaaj/career/delete/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Code</td>
            <td>string</td>
            <td>Code to delete</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE appmatriculacioaaj/career/delete/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
    </tr>
    </table>
    </br>
    <h2>/career/updateOne/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request (JSON)</th>
        </tr>
        <tr>
            <th colspan="5">PUT appmatriculacioaaj/career/updateOne/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Code</td>
            <td>string</td>
            <td>Code to update</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">PUT appmatriculacioaaj/career/updateOne/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
    </table>
    </br>
    <h2>/career/readOne/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj/career/readOne/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>cose</td>
            <td>string</td>
            <td>Code to read</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj/career/readOne/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>All career data.</td>
        </tr>
    </table>
    </br>
    <h2>/career/readAll/</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj/career/readAll/</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>null</td>
            <td>null</td>
            <td>null</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj/career/readAll/</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns an ID and Name from a career</td>
        </tr>
    </table>
    <h5>RETURN: {"Status":200, "_id":128370293849723084, "name": "Desenvolupament d'Aplicacions Multiplataforma"}</h5>
    </br></br>
    <h1>MP's CRUD</h1>
    </br>
    <h2>/mps/getbycareer/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj.herokuapp.com/mps/getbycareer/code</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>string</td>
            <td>Searchs from a code of career</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj.herokuapp.com/mps/getbycareer/code</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns a MP from a career_id</td>
        </tr>
    </table>
    </br>
    <h2>/mps/update/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">PUT appmatriculacioaaj.herokuapp.com/mps/getbycareer/code</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>string</td>
            <td>Searchs from a code of mp</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">PUT appmatriculacioaaj.herokuapp.com/mps/update/code</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>Succes</td>
            <td>True/False</td>
            <td>True if the action is correct and false if is wrong</td>
        </tr>
    </table>
    </br>
    <h2>/mp/delete/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE appmatriculacioaaj.herokuapp.com/mp/delete/code</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>string</td>
            <td>Searchs and delete from a code of mp</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE appmatriculacioaaj.herokuapp.com/mp/delete/code</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>Succes</td>
            <td>True/False</td>
            <td>True if the action is correct and false if it's wrong</td>
        </tr>
    </table>
    </br>
    <h2>/mps/delete/careercode</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE appmatriculacioaaj.herokuapp.com/mps/delete/careercode</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>string</td>
            <td>Searchs and delete all MP's from a career code</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE appmatriculacioaaj.herokuapp.com/mps/delete/careercode</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>Succes</td>
            <td>True/False</td>
            <td>True if the action is correct and false if it's wrong</td>
        </tr>
    </table>
    </br></br>
    <h1>UF's CRUD</h1>
    <h2>/uf/create</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">POST appmatriculacioaaj.herokuapp.com/uf/create</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>null</td>
            <td>null</td>
            <td>null</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST appmatriculacioaaj.herokuapp.com/uf/create</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns the new UF created</td>
        </tr>
    </table>
    </br>
    <h2>/uf/getbycareer/{careercode}</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj.herokuapp.com/uf/getbycareer/{careercode}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>careercode</td>
            <td>String</td>
            <td>Career code to achieve all UF's</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj.herokuapp.com/uf/getbycareer/{careercode}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns all UF's from career code</td>
        </tr>
    </table>
    </br>
    <h2>/uf/getbymp/{mpcode}</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj.herokuapp.com/uf/getbymp/{mpcode}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>mpcode</td>
            <td>String</td>
            <td>MP code to achieve all UF's</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj.herokuapp.com/uf/getbymp/{mpcode}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns all UF's from mp code</td>
        </tr>
    </table>
    </br>
    <h2>/uf/get/{code}</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj.herokuapp.com/uf/get/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>mpcode</td>
            <td>String</td>
            <td>UF code to achieve an UF</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj.herokuapp.com/uf/get/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns all UF's from code</td>
        </tr>
    </table>
    </br>
    <h2>/uf/update/{code}</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request (JSON)</th>
        </tr>
        <tr>
            <th colspan="5">PUT appmatriculacioaaj.herokuapp.com/uf/update/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>String</td>
            <td>Code to update</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>All the data to update</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">PUT appmatriculacioaaj.herokuapp.com/uf/update/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>Succes</td>
            <td>True/False</td>
            <td>Returns all UF updated.</td>
        </tr>
    </table>
    </br>
    <h2>/uf/delete/{code}</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE appmatriculacioaaj.herokuapp.com/uf/delete/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>String</td>
            <td>Code to delete</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE appmatriculacioaaj.herokuapp.com/uf/delete/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>Succes</td>
            <td>True/False</td>
            <td>Returns the delete status.</td>
        </tr>
    </table>
    <h1>Enrollment endpoints</h1>
    <h2>/enrollment/getCompletedUfs</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj.herokuapp.com/enrollment/getCompletedUfs</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>String</td>
            <td>email to achieve his/her completed UFs</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj.herokuapp.com/enrollment/getCompletedUfs</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns all completed UF's  (null if it hasn't any completed UF)</td>
        </tr>
    </table>
    <h2>/enrollment/getAllUfs</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj.herokuapp.com/enrollment/getAllUfs</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>emal</td>
            <td>String</td>
            <td>email to achieve his/her completed UFs</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj.herokuapp.com/enrollment/getAllUfs</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns all completed UF's  (null if it hasn't any completed UF)</td>
        </tr>
    </table>
    <h2>/enrollment/addUfs</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">PUT appmatriculacioaaj.herokuapp.com/enrollment/addUfs</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>null</td>
            <td>null</td>
            <td>null</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">PUT appmatriculacioaaj.herokuapp.com/enrollment/addUfs</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns all UF's enrolled</td>
        </tr>
    </table>
        </br></br>
    <h1>STUDENTS CRUD</h1>
    </br>
    <h2>/career/create/</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request (JSON)</th>
        </tr>
        <tr>
            <th colspan="5">POST appmatriculacioaaj/career/create/</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>null</td>
            <td>null</td>
            <td>null</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST appmatriculacioaaj/career/create/</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>Code</td>
            <td>string</td>
            <td>Code from the new career</td>
        </tr>
    </table>
    </br>
    <h2>/career/delete/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE appmatriculacioaaj/career/delete/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Code</td>
            <td>string</td>
            <td>Code to delete</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE appmatriculacioaaj/career/delete/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
    </tr>
    </table>
    </br>
    <h2>/career/updateOne/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request (JSON)</th>
        </tr>
        <tr>
            <th colspan="5">PUT appmatriculacioaaj/career/updateOne/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Code</td>
            <td>string</td>
            <td>Code to update</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">PUT appmatriculacioaaj/career/updateOne/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
    </table>
    </br>
    <h2>/career/readOne/code</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj/career/readOne/{code}</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>cose</td>
            <td>string</td>
            <td>Code to read</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj/career/readOne/{code}</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>All career data.</td>
        </tr>
    </table>
    </br>
    <h2>/career/readAll/</h2>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET appmatriculacioaaj/career/readAll/</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>null</td>
            <td>null</td>
            <td>null</td>
        </tr>
    </table>
    <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET appmatriculacioaaj/career/readAll/</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>status</td>
            <td>500/200</td>
            <td>Query Stat</td>
        </tr>
        <tr>
            <td>body</td>
            <td>JSON</td>
            <td>Returns an ID and Name from a career</td>
        </tr>
    </table>
    <h5>RETURN: {"Status":200, "_id":128370293849723084, "name": "Desenvolupament d'Aplicacions Multiplataforma"}</h5>
    </br></br>
</body>

</html>
