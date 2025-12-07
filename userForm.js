function userForm(req, res) {
   res.write(`
      <form method="POST" action="/submit">
      <input type="text" name="name" placeholder="enter name" /><br/>
      <input type="text" name="password" placeholder="enter password" /><br/>
      <button type="submit">Submit</button>
      </form>
   `);
}

module.exports = userForm;