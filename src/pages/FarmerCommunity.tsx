import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StatCard } from "@/components/ui/stat-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  MessageSquare,
  MapPin,
  ThumbsUp,
  Reply,
  Star,
  Clock,
  Bookmark,
  Search,
  Plus,
  Award,
  TrendingUp,
} from "lucide-react";

// Mock community data
const communityStats = [
  {
    title: "Active Farmers",
    value: "1,247",
    subtitle: "In your region",
    icon: Users,
    trend: { value: 18, isPositive: true },
  },
  {
    title: "Daily Discussions",
    value: "89",
    subtitle: "Questions & answers",
    icon: MessageSquare,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Expert Responses",
    value: "156",
    subtitle: "This week",
    icon: Award,
    trend: { value: 25, isPositive: true },
  },
  {
    title: "Success Stories",
    value: "43",
    subtitle: "Shared this month",
    icon: TrendingUp,
    trend: { value: 35, isPositive: true },
  },
];

const forumPosts = [
  {
    id: 1,
    author: {
      name: "Ramesh Kumar",
      avatar: "/api/placeholder/40/40",
      location: "Pune, Maharashtra",
      reputation: 4.8,
      badge: "Expert Farmer",
      posts: 145,
    },
    title: "Best organic fertilizer for tomato cultivation in clay soil?",
    content: "I have been growing tomatoes for 3 years now, but this season I want to switch to organic methods. My soil is clay-heavy and tends to retain water. What organic fertilizers would you recommend for better yield?",
    timestamp: "2 hours ago",
    category: "Organic Farming",
    likes: 23,
    replies: 8,
    views: 156,
    tags: ["Tomatoes", "Organic", "Clay Soil", "Fertilizer"],
    isBookmarked: false,
    isPinned: false,
  },
  {
    id: 2,
    author: {
      name: "Dr. Priya Sharma",
      avatar: "/api/placeholder/40/40",
      location: "Agricultural University, Delhi",
      reputation: 4.9,
      badge: "Agricultural Expert",
      posts: 89,
    },
    title: "Integrated Pest Management for Cotton - Best Practices 2024",
    content: "Based on recent research and field trials, here are the most effective IPM strategies for cotton cultivation. These methods have shown 40% reduction in pesticide use while maintaining yield...",
    timestamp: "4 hours ago",
    category: "Pest Management",
    likes: 67,
    replies: 15,
    views: 342,
    tags: ["Cotton", "IPM", "Pest Control", "Sustainable"],
    isBookmarked: true,
    isPinned: true,
  },
  {
    id: 3,
    author: {
      name: "Manjeet Singh",
      avatar: "/api/placeholder/40/40",
      location: "Ludhiana, Punjab",
      reputation: 4.6,
      badge: "Progressive Farmer",
      posts: 67,
    },
    title: "Wheat rust disease affecting my crop - need immediate help!",
    content: "I noticed yellow-orange spots on my wheat leaves yesterday. The weather has been humid lately. Is this wheat rust? What immediate steps should I take? Photos attached below.",
    timestamp: "6 hours ago",
    category: "Disease Management",
    likes: 12,
    replies: 18,
    views: 234,
    tags: ["Wheat", "Disease", "Urgent", "Yellow Rust"],
    isBookmarked: false,
    isPinned: false,
  },
  {
    id: 4,
    author: {
      name: "Sunita Devi",
      avatar: "/api/placeholder/40/40",
      location: "Jaipur, Rajasthan",
      reputation: 4.7,
      badge: "Successful Farmer",
      posts: 134,
    },
    title: "Increased my onion yield by 60% using this water management technique",
    content: "Last season, I implemented a drip irrigation system combined with mulching for my onion crop. The results were amazing! Here's a detailed breakdown of what I did and the costs involved...",
    timestamp: "1 day ago",
    category: "Success Story",
    likes: 89,
    replies: 24,
    views: 567,
    tags: ["Onion", "Irrigation", "Success", "Water Management"],
    isBookmarked: true,
    isPinned: false,
  },
  {
    id: 5,
    author: {
      name: "Agricultural Officer",
      avatar: "/api/placeholder/40/40",
      location: "Government Advisory",
      reputation: 5.0,
      badge: "Official",
      posts: 45,
    },
    title: "New Government Subsidy Scheme for Organic Certification",
    content: "The government has announced a new subsidy scheme providing up to 75% financial assistance for organic certification. Application deadline is March 31st. Here are the eligibility criteria...",
    timestamp: "2 days ago",
    category: "Government Schemes",
    likes: 156,
    replies: 32,
    views: 1024,
    tags: ["Subsidy", "Organic", "Government", "Certification"],
    isBookmarked: false,
    isPinned: true,
  },
];

const expertReplies = [
  {
    postId: 1,
    expert: {
      name: "Dr. Vikram Patel",
      title: "Soil Scientist",
      institution: "ICAR Research Institute",
      reputation: 4.9,
    },
    reply: "For clay soil tomato cultivation, I recommend using well-decomposed cow manure (5-7 tons/hectare) mixed with neem cake (200 kg/hectare). This combination improves soil structure and provides slow-release nutrients.",
    timestamp: "1 hour ago",
    likes: 15,
    isVerified: true,
  },
  {
    postId: 3,
    expert: {
      name: "Dr. Anita Rao",
      title: "Plant Pathologist",
      institution: "Punjab Agricultural University",
      reputation: 4.8,
    },
    reply: "Based on your description, this appears to be yellow rust (Puccinia striiformis). Immediate action needed: 1) Apply Tebuconazole fungicide, 2) Ensure proper drainage, 3) Remove infected plant debris. Monitor weather conditions closely.",
    timestamp: "3 hours ago",
    likes: 28,
    isVerified: true,
  },
];

const trendingTopics = [
  { topic: "Organic Farming", posts: 234, growth: "+12%" },
  { topic: "Water Management", posts: 189, growth: "+8%" },
  { topic: "Pest Control", posts: 156, growth: "+15%" },
  { topic: "Government Schemes", posts: 145, growth: "+22%" },
  { topic: "Crop Disease", posts: 134, growth: "+6%" },
  { topic: "Soil Health", posts: 123, growth: "+10%" },
];

const nearbyFarmers = [
  {
    name: "Raj Patel",
    location: "2.3 km away",
    specialization: "Vegetable Farming",
    rating: 4.7,
    posts: 89,
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Meera Singh",
    location: "4.1 km away",
    specialization: "Dairy & Crops",
    rating: 4.8,
    posts: 156,
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Kumar Sharma",
    location: "5.7 km away",
    specialization: "Fruit Orchards",
    rating: 4.6,
    posts: 67,
    avatar: "/api/placeholder/40/40",
  },
];

const categories = [
  { name: "General Discussion", count: 234, color: "#0D7377" },
  { name: "Crop Management", count: 189, color: "#329F5B" },
  { name: "Pest & Disease", count: 156, color: "#F4A261" },
  { name: "Government Schemes", count: 145, color: "#14FFEC" },
  { name: "Success Stories", count: 123, color: "#E76F51" },
  { name: "Market Prices", count: 98, color: "#2A9D8F" },
];

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Expert Farmer": return "bg-primary/10 text-primary border-primary/20";
    case "Agricultural Expert": return "bg-success/10 text-success border-success/20";
    case "Progressive Farmer": return "bg-accent/10 text-accent border-accent/20";
    case "Successful Farmer": return "bg-warning/10 text-warning border-warning/20";
    case "Official": return "bg-destructive/10 text-destructive border-destructive/20";
    default: return "bg-muted";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Organic Farming": return "bg-success/10 text-success border-success/20";
    case "Pest Management": return "bg-warning/10 text-warning border-warning/20";
    case "Disease Management": return "bg-destructive/10 text-destructive border-destructive/20";
    case "Success Story": return "bg-primary/10 text-primary border-primary/20";
    case "Government Schemes": return "bg-accent/10 text-accent border-accent/20";
    default: return "bg-muted";
  }
};

export default function FarmerCommunity() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Farmer Community
          </h1>
          <p className="text-muted-foreground mt-2">
            Connect with local farmers, share experiences, and get expert advice from agricultural professionals.
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2">
            <MapPin className="h-4 w-4" />
            Maharashtra Region
          </Badge>
          <Button className="gradient-primary gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Forum Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filters */}
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search discussions..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Latest</Button>
                  <Button variant="outline" size="sm">Popular</Button>
                  <Button variant="outline" size="sm">Trending</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forum Posts */}
          <div className="space-y-4">
            {forumPosts.map((post) => (
              <Card key={post.id} className="glass-card hover-lift">
                <CardContent className="p-6">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{post.author.name}</h4>
                          <Badge variant="outline" className={getBadgeColor(post.author.badge)}>
                            {post.author.badge}
                          </Badge>
                          {post.isPinned && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              Pinned
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{post.author.location}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current text-yellow-500" />
                            <span>{post.author.reputation}</span>
                          </div>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Bookmark className={`h-4 w-4 ${post.isBookmarked ? 'fill-current text-primary' : ''}`} />
                      </Button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{post.content}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Post Stats and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Reply className="h-4 w-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{post.views} views</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Reply className="h-4 w-4" />
                        Reply
                      </Button>
                    </div>
                  </div>

                  {/* Expert Replies */}
                  {expertReplies.filter(reply => reply.postId === post.id).map((reply, index) => (
                    <div key={index} className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-semibold">{reply.expert.name}</h5>
                            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                              Expert
                            </Badge>
                            {reply.isVerified && (
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {reply.expert.title} at {reply.expert.institution}
                          </p>
                          <p className="text-sm">{reply.reply}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span>{reply.timestamp}</span>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{reply.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-elevated cursor-pointer">
                    <div>
                      <p className="font-medium text-sm">{topic.topic}</p>
                      <p className="text-xs text-muted-foreground">{topic.posts} posts</p>
                    </div>
                    <Badge variant="outline" className="text-xs text-success">
                      {topic.growth}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Nearby Farmers */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Nearby Farmers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nearbyFarmers.map((farmer, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-elevated cursor-pointer">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={farmer.avatar} />
                      <AvatarFallback>{farmer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{farmer.name}</p>
                      <p className="text-xs text-muted-foreground">{farmer.location}</p>
                      <p className="text-xs text-muted-foreground">{farmer.specialization}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        <span>{farmer.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{farmer.posts} posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-elevated cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}