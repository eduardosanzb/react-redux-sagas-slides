export default `
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript in Body old style</h2>

    <p id="demo">A Paragraph.</p>

    <button type="button" onclick="myFunction()">Try it</button>

    <script>
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>

  </body>
</html> 

`
