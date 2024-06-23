import Container from './components/Container'
import Input from './components/Input'
import Label from './components/Label'

function App() {
  return (
    <article className="w-dvw h-dvh grid place-items-center">
      <Container>
        <h1 className="text-3xl font-bold pt-2">Contact Us</h1>
        <div className="pt-2 grid grid-cols-none md:grid-cols-2 grid-rows-2 md:grid-rows-none gap-4">
          <section>
            <Label name="first-name">First Name</Label>
            <br />
            <Input type="text" name="first-name" />
          </section>

          <section className="">
            <Label name="last-name">Last Name</Label>
            <br />
            <Input type="text" name="last-name" />
          </section>
        </div>
      </Container>
    </article>
  )
}

export default App
