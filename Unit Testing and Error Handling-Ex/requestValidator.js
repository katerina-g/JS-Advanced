// function solve(httpObj) {
//     validateMethod(httpObj);
//     validateUri(httpObj);
//     validateVersion(httpObj);
//     validateMessage(httpObj);
//     return httpObj;
//     function validateMessage(httpObj) {
//         let propName = 'message';
//         let messageRegex = /^[^<>\\&'"]*$/;

//         if (httpObj[propName] === undefined ||
//             !messageRegex.test(httpObj[propName])) {
//             throw new Error("Invalid request header: Invalid Message");
//         }

//     }

//     function validateVersion(httpObj) {
//         let propName = 'version';
//         let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
//         if (httpObj[propName] === undefined ||
//             !validVersions.includes(httpObj[propName])) {
//             throw new Error("Invalid request header: Invalid Version");
//         }
//     }

//     function validateUri(httpObj) {
//         let propName = 'uri';
//         let uriRegex = /^\*$|^[a-zA-Z0-9.]+$/;

//         if (httpObj[propName] === undefined || 
//             !uriRegex.test(httpObj[propName])) {
//             throw new Error("Invalid request header: Invalid URI");
//         }

//     }

//     function validateMethod(httpObj) {
//         let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
//         let propName = 'method';

//         if (httpObj[propName] === undefined ||
//             !validMethods.includes(httpObj[propName])) {
//             throw new Error("Invalid request header: Invalid Method")

//         }
//     }
// }
// try {
//     console.log(solve({
//         method: 'OPTIONS',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: '-recursive'
//       }
      
//     ))
// } catch (e) {
//     console.log(e.message)
// }
function fn(obj) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const uriRegex = /(^[\w.]+$)/;
    const messageTest = /([<>\\&'"])/;

    if (!obj.method || !validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.uri || obj.uri == "" || !uriRegex.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!obj.version || !validVersions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (obj.message == undefined || messageTest.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}