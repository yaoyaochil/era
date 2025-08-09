const ContentStep = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) => {
  return (
    <div className="welcome-content-step">
      <Icon className="w-6 h-6" />  
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ContentStep
