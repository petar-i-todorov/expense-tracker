import { Link, Outlet } from "react-router-dom"
import { namings } from "../constants/namings"
import { messages } from "../constants/messages"
import "./root.css"
import { convertToSlug } from "../utils/misc";

const { pageTitles } = namings;

function Root() {
  return (
    <>
      <header className="app-header">
        <nav className="app-nav">
          {Object.values(pageTitles).map(page => {
            const slug = convertToSlug(page)
            return <Link key={page} to={slug}>{page}</Link>
          })}
        </nav>
      </header>
      <main className="app-body">
        <Outlet />        
      </main>
      <footer className="app-footer">
          {messages.copyrightNotice}
      </footer>
    </>
  )
}

export default Root
