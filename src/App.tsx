import Container from './components/Container'
import Input from './components/Input'
import Label from './components/Label'
import RadioBox from './components/RadioBox'

function App() {
  return (
    <article className="w-dvw h-dvh grid place-items-center">
      <Container>
        <h1 className="text-3xl font-bold pt-2">Contact Us</h1>
        <section className="pt-2 grid grid-cols-none md:grid-cols-2 grid-rows-2 md:grid-rows-none gap-4">
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
        </section>

        <section className="mt-2 md:mt-4">
          <Label name="email">Email</Label>
          <br />
          <Input type="email" name="email" />
        </section>

        <section className="mt-2 md:mt-4">
          <h1>Query Type</h1>
          <section className=" grid grid-rows-2 md:grid-rows-none grid-cols-none md:grid-cols-2 gap-3">
            <RadioBox
              name="general-enquiries"
              displayName="General Enquiries"
            />
            <RadioBox name="support-role" displayName="Support Role" />
          </section>
        </section>
      </Container>
    </article>
  )
}

export default App
