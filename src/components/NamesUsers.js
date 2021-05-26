import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
class NamesUsers extends React.Component {


    state = {
        user: []
    }

    async componentDidMount() {
        await this.fetchUsers()
    }

    fetchUsers = async () => {
        try {
            let res = await fetch(`http://localhost:8000/api/user/${cookies.get('uname')}`)
            let user = await res.json()
            this.setState(
                { user }
            )
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <select className="form-control">
                {
                    this.state.user.map((us) => {
                        return (
                            <option key={us.id}>
                                {us.username}
                            </option>
                        )

                    })
                }
            </select>
        )

    }
}

export default NamesUsers