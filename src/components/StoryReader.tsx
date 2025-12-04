import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StoryReaderProps {
  storyId: number;
  onBack: () => void;
}

const storiesContent: Record<number, any> = {
  1: {
    title: 'The Tale of Osiris and Isis',
    category: 'Mythology',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1728242410792-5559cb70def0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      {
        type: 'paragraph',
        text: 'Long ago in Ancient Egypt, there lived a great god named Osiris. He was loved by all Egyptians because he taught them how to farm, build cities, and live peacefully together. Osiris had beautiful green skin, representing the fertile land along the Nile River.'
      },
      {
        type: 'paragraph',
        text: 'Osiris ruled Egypt alongside his wife, the goddess Isis. She was known for her powerful magic and wisdom. Together, they made Egypt prosperous and happy. The crops grew tall, the people were healthy, and peace filled the land.'
      },
      {
        type: 'heading',
        text: 'The Jealous Brother'
      },
      {
        type: 'paragraph',
        text: 'But not everyone was happy. Osiris had a brother named Set, who was jealous of Osiris\'s power and the love people had for him. Set was the god of chaos and the desert, and he had red hair and a fierce temper.'
      },
      {
        type: 'paragraph',
        text: 'One day, Set came up with an evil plan. He built a beautiful golden chest, decorated with precious jewels and painted with bright colors. It was so magnificent that everyone who saw it wanted to own it.'
      },
      {
        type: 'paragraph',
        text: 'Set threw a grand party and invited Osiris and many other gods. During the celebration, Set announced: "Whoever fits perfectly in this golden chest can keep it!" One by one, the guests tried to fit inside, but the chest was either too big or too small for everyone.'
      },
      {
        type: 'paragraph',
        text: 'Finally, Osiris tried. The chest fit him perfectly! But as soon as Osiris lay down inside, Set and his followers slammed the lid shut, locked it with heavy chains, and threw it into the Nile River!'
      },
      {
        type: 'heading',
        text: 'Isis\'s Quest'
      },
      {
        type: 'paragraph',
        text: 'When Isis discovered what had happened, she was devastated. But she didn\'t give up. Using her magic and determination, she searched everywhere for the chest. She traveled far and wide, asking everyone if they had seen it.'
      },
      {
        type: 'paragraph',
        text: 'Finally, after a long journey, Isis found the chest in a faraway land. It had washed up on shore and a tree had grown around it! The tree was so beautiful that a king had cut it down to use as a pillar in his palace.'
      },
      {
        type: 'paragraph',
        text: 'Isis used her cleverness to get close to the palace. She became friends with the queen and eventually revealed her true identity. The king and queen, amazed by the goddess, gave her the pillar. Isis brought Osiris back to Egypt.'
      },
      {
        type: 'heading',
        text: 'The Power of Love'
      },
      {
        type: 'paragraph',
        text: 'Using her powerful magic, Isis brought Osiris back to life temporarily. But Set discovered this and became even more angry. However, Isis\'s love proved stronger than Set\'s hatred.'
      },
      {
        type: 'paragraph',
        text: 'Though Osiris could not return to rule the living world, he became the god of the afterlife, ruling over the underworld with kindness and justice. Isis remained on Earth, using her magic to help people and protect her son, Horus.'
      },
      {
        type: 'paragraph',
        text: 'The story of Osiris and Isis teaches us that love, loyalty, and determination can overcome even the greatest challenges. It\'s one of the most important myths in Egyptian culture, showing how death is not the end but a transformation to a new beginning.'
      },
      {
        type: 'fact-box',
        title: 'Did You Know?',
        facts: [
          'Ancient Egyptians believed Osiris judged the souls of the dead to decide if they could enter the afterlife.',
          'Isis was one of the most powerful goddesses in Egyptian mythology, known as the "Goddess of Magic."',
          'The story of Osiris and Isis was so popular that it was told for over 3,000 years!',
          'Osiris is usually shown with green or black skin, representing rebirth and the fertile soil of Egypt.'
        ]
      }
    ]
  },
  2: {
    title: 'King Tutankhamun: The Boy Pharaoh',
    category: 'History',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1639851826638-87191772cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHB5cmFtaWRzJTIwZGVzZXJ0fGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      {
        type: 'paragraph',
        text: 'Imagine becoming the ruler of one of the most powerful countries in the world when you\'re only 9 years old! That\'s exactly what happened to a young boy named Tutankhamun over 3,300 years ago in Ancient Egypt.'
      },
      {
        type: 'heading',
        text: 'The Boy Who Became King'
      },
      {
        type: 'paragraph',
        text: 'Tutankhamun, whose name means "Living Image of Amun," wasn\'t supposed to be pharaoh. His father, Pharaoh Akhenaten, had changed Egypt\'s religion and moved the capital city. When Akhenaten died, young Tut inherited a kingdom in trouble.'
      },
      {
        type: 'paragraph',
        text: 'At just 9 years old, Tutankhamun wore the double crown of Egypt - the red crown of Lower Egypt and the white crown of Upper Egypt combined. He had to make important decisions about his entire kingdom, with the help of trusted advisors.'
      },
      {
        type: 'paragraph',
        text: 'As pharaoh, Tut worked to restore the old gods and traditions his father had changed. He moved the capital back to Thebes and rebuilt temples. He wanted to bring stability back to Egypt.'
      },
      {
        type: 'heading',
        text: 'A Pharaoh\'s Life'
      },
      {
        type: 'paragraph',
        text: 'King Tut lived in magnificent palaces with golden decorations, beautiful gardens, and pools. He had servants to help him dress in fine linen clothes and jewelry made of gold, silver, and precious stones.'
      },
      {
        type: 'paragraph',
        text: 'He loved hunting and spent time in the desert hunting lions and other animals. He also enjoyed board games, especially a game called Senet, which was very popular in Ancient Egypt.'
      },
      {
        type: 'heading',
        text: 'A Mystery Unsolved'
      },
      {
        type: 'paragraph',
        text: 'Sadly, King Tutankhamun died when he was only 18 or 19 years old. How he died remains one of history\'s greatest mysteries. Some scientists think he might have broken his leg and gotten an infection. Others believe different theories. We may never know for sure.'
      },
      {
        type: 'paragraph',
        text: 'After his death, Tutankhamun was mummified and buried in a tomb in the Valley of the Kings. His tomb was filled with thousands of treasures - golden chariots, furniture, games, jewelry, and even food for his journey to the afterlife.'
      },
      {
        type: 'heading',
        text: 'The Amazing Discovery'
      },
      {
        type: 'paragraph',
        text: 'For over 3,000 years, King Tut\'s tomb lay hidden beneath the desert sand. Many pharaohs\' tombs had been robbed by thieves over the centuries, but Tut\'s tomb remained nearly untouched.'
      },
      {
        type: 'paragraph',
        text: 'In 1922, a British archaeologist named Howard Carter made an incredible discovery. After years of searching, he found the entrance to Tutankhamun\'s tomb! When he peeked inside by candlelight, he saw "wonderful things" - golden treasures gleaming in the darkness.'
      },
      {
        type: 'paragraph',
        text: 'The most famous object found in the tomb was King Tut\'s golden death mask. Made of 11 kilograms (24 pounds) of solid gold, it shows the young king\'s face with a serene expression. Today, it\'s one of the most famous artifacts in the world!'
      },
      {
        type: 'fact-box',
        title: 'Amazing Facts About King Tut',
        facts: [
          'King Tut\'s tomb contained over 5,000 objects, including 130 walking sticks!',
          'His golden death mask is worth millions of dollars today.',
          'King Tut\'s tomb was so small, it was probably meant for someone else originally.',
          'Scientists have used CT scans and DNA tests to learn about King Tut\'s health and family.',
          'The discovery of his tomb sparked a worldwide fascination with Ancient Egypt that continues today!'
        ]
      }
    ]
  },
  3: {
    title: 'The Mystery of the Sphinx',
    category: 'Mystery',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1599976983902-8a9c51770f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHNwaGlueCUyMG1vbnVtZW50fGVufDF8fHx8MTc2NDc4NzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: [
      {
        type: 'paragraph',
        text: 'In the desert near Cairo, Egypt, sits one of the most mysterious and fascinating monuments in the world: the Great Sphinx of Giza. With the body of a lion and the head of a human, this massive statue has puzzled people for thousands of years.'
      },
      {
        type: 'heading',
        text: 'The Guardian of the Pyramids'
      },
      {
        type: 'paragraph',
        text: 'The Great Sphinx stands 20 meters (66 feet) tall and 73 meters (240 feet) long. That\'s longer than a Boeing 747 airplane! It faces east, watching the sun rise each morning over the desert.'
      },
      {
        type: 'paragraph',
        text: 'The Sphinx sits near the three great pyramids of Giza, appearing to guard these ancient tombs. But who built it, and why? These questions have fascinated archaeologists and historians for centuries.'
      },
      {
        type: 'heading',
        text: 'Who Built the Sphinx?'
      },
      {
        type: 'paragraph',
        text: 'Most experts believe the Sphinx was built during the reign of Pharaoh Khafre, around 4,500 years ago. They think the face of the Sphinx might represent Khafre himself, watching over his pyramid.'
      },
      {
        type: 'paragraph',
        text: 'The Sphinx was carved from a single massive piece of limestone. Ancient workers used copper tools and stone hammers to shape this incredible statue. It must have taken many years and thousands of workers to complete!'
      },
      {
        type: 'heading',
        text: 'The Missing Nose'
      },
      {
        type: 'paragraph',
        text: 'One of the biggest mysteries is: what happened to the Sphinx\'s nose? The nose is missing, and no one knows exactly why. Some stories say Napoleon\'s soldiers shot it off with cannons, but this isn\'t true. Drawings from before Napoleon\'s time already show the Sphinx without a nose!'
      },
      {
        type: 'paragraph',
        text: 'The truth is that time and weather wore away the nose. The Sphinx has stood in the desert for over 4,500 years, facing sandstorms and wind. It\'s amazing it has lasted so long!'
      },
      {
        type: 'heading',
        text: 'Buried in Sand'
      },
      {
        type: 'paragraph',
        text: 'For much of history, the Sphinx was buried up to its neck in sand! Desert winds constantly covered it. Ancient Egyptians had to dig it out several times. Even in modern times, it took years of work to fully uncover the Sphinx.'
      },
      {
        type: 'fact-box',
        title: 'Sphinx Secrets',
        facts: [
          'The Sphinx is carved from limestone bedrock that was already at the site.',
          'Between its paws is a stone tablet called the Dream Stele, telling a story about a prince who cleared sand from the Sphinx.',
          'The word "sphinx" comes from Greek, meaning "to squeeze" or "to strangle."',
          'Some people believe there might be hidden chambers beneath the Sphinx, but none have been found yet.',
          'The Sphinx once had a ceremonial beard, but it fell off long ago. Pieces of it are now in museums!'
        ]
      }
    ]
  }
};

export function StoryReader({ storyId, onBack }: StoryReaderProps) {
  const story = storiesContent[storyId];

  if (!story) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <Button onClick={onBack} variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Button>
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-slate-600">Story not found</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-4 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Stories
        </Button>

        <Card className="border-2 border-amber-200 overflow-hidden">
          {/* Header Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-amber-100 to-orange-200 overflow-hidden">
            <ImageWithFallback
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <Badge className="mb-3 bg-white/90 text-slate-800">{story.category}</Badge>
                <h1 className="text-4xl text-white mb-2">{story.title}</h1>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {story.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <CardContent className="p-8 space-y-6">
            {story.content.map((section: any, index: number) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl text-amber-800 mt-8 mb-4">
                    {section.text}
                  </h2>
                );
              }

              if (section.type === 'paragraph') {
                return (
                  <p key={index} className="text-slate-700 text-lg leading-relaxed">
                    {section.text}
                  </p>
                );
              }

              if (section.type === 'fact-box') {
                return (
                  <div key={index} className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 my-8">
                    <h3 className="text-xl text-amber-800 mb-4">💡 {section.title}</h3>
                    <ul className="space-y-3">
                      {section.facts.map((fact: string, factIndex: number) => (
                        <li key={factIndex} className="text-slate-700 flex gap-3">
                          <span className="text-amber-600 flex-shrink-0">✦</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return null;
            })}

            {/* Completion Banner */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center mt-8">
              <h3 className="text-xl text-green-800 mb-2">🎉 Story Complete!</h3>
              <p className="text-slate-700 mb-4">You've finished this story. Great job!</p>
              <Button onClick={onBack} className="bg-green-600 hover:bg-green-700">
                Read Another Story
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
