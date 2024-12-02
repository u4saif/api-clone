#  api-clone [For Type Script based projects]

**api-clone**  💡Light weight NPM Package To Transform any input as Server Mock API Response.



# Usage [👉DEMO LINK](https://codesandbox.io/p/devbox/rstsjj)
- In the code below after importing it calling the function 👉 **get( OUTPUT_DATA, DELAY_IN_SECONDS)** 

- OUTPUT will be returning **Observable** that can be subscrib to get the response after defined delay. ✅


```javascript
import get from "api-clone";

get({"data":"hello"},3).subscribe((Data)=>{    console.log("response",Data);
})
```

## Feature 

🌻 It will return an Observable which you can subscribe like usually we do when Callig any Backend API and waiting for Response from Server.

🥀The beauty is that We can supply any input 
- JSON
- String 
-  Number
-  Empty

> 🤖 It will be return in the Response.

> ⏰ We can Provide the **Delay**  in **Seconds**
