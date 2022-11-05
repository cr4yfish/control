

import type { NextPage } from "next"
import { User } from "@nextui-org/react"

const CurrentUser: NextPage = ({ persons, user }) => {

    return (
    <>        
        {persons.map((person) => {
            return person.attributes.friendly_name === user.name ? (
            <div key={person.attributes.friendly_name}>
              <User
              key={person.entity_id}
              src={"http://homeassistant.local:8123" + person.attributes.entity_picture}
              name={person.attributes.friendly_name}
            />
            </div>
            ) : null })
        }
    </>
    )
}

export default CurrentUser;