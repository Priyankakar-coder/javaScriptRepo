function isOddOrEven(num) {{
   if (num % 2 === 0) {{
      return "Even";
   }} else {{
      return "Odd";
   }}
}}
let num = 7;
console.log(`The Result is: ${isOddOrEven(num)}`);