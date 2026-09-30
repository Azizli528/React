import ProfileCard from './ProfileCard'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ProfileCard
        image="https://static.vecteezy.com/system/resources/thumbnails/073/305/559/small/male-software-developer-seated-at-a-modern-workstation-focused-on-multiple-screens-displaying-code-surrounded-by-a-vibrant-office-environment-showcasing-technology-and-collaboration-photo.jpeg"
        name="Ezizli Meherrem"
        job="Fullstack developer"
        bio="Frontend və Backend ilə muasir veb səhifələr hazirlayiram."
      />
    </div>
  )
}

export default App