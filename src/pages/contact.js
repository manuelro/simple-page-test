import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TextField from "../components/text-field"
import Form from "../components/form"
import Select from "../components/select"
import withRedux from "../hocs/withRedux"
import withContext from "../hocs/withContext"

const ContactPage = () => {
  return (
    <Layout>
        <div className="text-gray-950 text-2xl font-bold mb-12 text-center pt-2">Company Name</div>

        <div className="w-full grid grid-cols-12 p-4 gap-7 xl:gap-28">
          <section className="text-sm col-span-12 xl:col-span-7">
            <h2 className="text-2xl">Contact Us</h2>

            <p className="text-sm pt-4 pb-2">Please provide some information to get started.</p>

            <Form>
              <TextField inputOptions={{ name: 'email', placeholder: 'Email', type: 'email', required: true }} validators={[{ regex: /gmail/gim, negate: true }]} />
              <TextField inputOptions={{ name: 'name', placeholder: 'Name' }} />
              <TextField inputOptions={{ name: 'phone', placeholder: 'Phone Number', type: 'number', required: true }} validators={[{ regex: /.{10,}/ }]} />

              <Select
                inputOptions={{ name: 'reason', placeholder: 'Select an option', label: 'How We Can Help You?' }}
                options={[
                  { value: 'sales', label: 'Sales' },
                  { value: 'press', label: 'Press' },
                  { value: 'support', label: 'Support' },
                  { value: 'demo', label: 'Demo' },
                ]}
              />
            </Form>
          </section>

          <section className="col-span-12 xl:col-span-5 xl:mt-20">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
              </p>

              <p className="py-6">
                <span className="text-gray-950 font-bold">Phone:</span> <br/>
                <a href="https://google.com" target="_blank" rel="noreferrer" className="text-xl">+1 (877) 777-7777</a>
              </p>

              <p>
                <span className="text-gray-950 font-bold">Hours:</span> <br/>
                Monday - Sunday: <span className="font-bold text-gray-950">7am - 11pm EST</span>
              </p>
          </section>
        </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />

export default withContext(withRedux(ContactPage))
