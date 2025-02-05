
import { Logo } from '../icons/Logo'
import { Button } from '../componets/ui/Button'
import { useNavigate } from 'react-router-dom'
import { Youtubeicons } from '../icons/Youtubeicons'
import { Xicon } from '../icons/Xicon'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-500">
            <Logo />
            <span className="text-2xl font-bold">Brainly</span>
          </div>
          <div className="space-x-4">
            <Button 
              text="Sign In" 
              variants="secondary" 
              onClick={() => navigate('/signin')}
            />
            <Button 
              text="Sign Up" 
              variants="primary" 
              onClick={() => navigate('/signup')}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Your Personal Content Library
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Save and organize your favorite content from YouTube and Twitter in one place. 
            Share your curated collection with others.
          </p>
          <Button 
            text="Get Started" 
            variants="primary" 
            onClick={() => navigate('/signup')}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Supported Platforms
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-6 rounded-lg border-2 border-slate-200 flex items-center gap-4">
              <div className="text-red-500">
                <Youtubeicons />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">YouTube Integration</h3>
                <p className="text-slate-600">Save and embed your favorite YouTube videos</p>
              </div>
            </div>
            <div className="p-6 rounded-lg border-2 border-slate-200 flex items-center gap-4">
              <div className="text-slate-900">
                <Xicon />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Twitter Integration</h3>
                <p className="text-slate-600">Save and embed tweets from Twitter/X</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Logo />
            <span className="text-xl font-bold">Brainly</span>
          </div>
          <p className="text-slate-400">
            © {new Date().getFullYear()} Brainly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home