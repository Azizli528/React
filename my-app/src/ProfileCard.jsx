function ProfileCard({ image, name, job, bio }) {
  return (
    <div className="max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg">
      <img
        src={image}
        alt={name}
        className="mx-auto h-28 w-28 rounded-full object-cover"
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm font-medium text-blue-600">{job}</p>
      <p className="mt-3 text-gray-600">{bio}</p>
    </div>
  )
}

export default ProfileCard