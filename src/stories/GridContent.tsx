import React from "react"
import Card from "./Card"

const GridContent: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold">Trending</h2>
            <div className="grid grid-cols-4 gap-y-12 mt-12">
                <Card variant="withPrice" title="Shoes" desc="A shoes that can capable running on lava and defeat moon lord" image="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg" buttonText="Take a look"/>
                <Card variant="withPrice" title="Shoes" desc="A shoes that can capable running on lava and defeat moon lord" image="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg" buttonText="Take a look"/>
                <Card variant="withPrice" title="Shoes" desc="A shoes that can capable running on lava and defeat moon lord" image="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg" buttonText="Take a look"/>
                <Card variant="withPrice" title="Shoes" desc="A shoes that can capable running on lava and defeat moon lord" image="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg" buttonText="Take a look"/>
                <Card variant="withPrice" title="Shoes" desc="A shoes that can capable running on lava and defeat moon lord" image="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg" buttonText="Take a look"/>
            </div>
        </div>
    )
}


export default GridContent