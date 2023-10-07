import Navbar from "@/app/components/Navbar";

export default function Menu() {
    return (
        <main>
            <div className="bg-zinc-800">
                <Navbar/>
                <div className="text-center pt-5 space-y-3">
                    <h1 className="text-6xl font-bold">Menu</h1>
                    <h2 className="text-3xl font-light">(insert description, though might get removed)</h2>
                </div>
                <div className="px-20">
                    <p>Menu is currently being worked on</p>
                    {
                        /*
                      <h1 className="text-5xl font-medium">Main Course</h1>
                    <ul>
                        <li>Steak - $5</li>
                        <li>Potato - $5</li>
                        <li>Potato - $5</li>
                        <li>Potato - $5</li>
                    </ul>
                    <h1 className="text-5xl font-medium">Special</h1>
                    <ul>
                        <li>MinePot Soup - $20</li>
                    </ul>
                        * */
                    }
                </div>
            </div>
        </main>
    )
}
