'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  'https://www.modelsofauthority.ac.uk/media/uploads/Carousel/kelso_image.jpg',
  'https://www.modelsofauthority.ac.uk/media/uploads/Carousel/annotating.jpg',
  'https://www.modelsofauthority.ac.uk/media/uploads/Carousel/allographs.jpg',
]

export default function Component() {
  const [currentImage, setCurrentImage] = React.useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='relative overflow-hidden'>
          <CardContent className='p-0'>
            <div className='relative h-[400px]'>
              <Image
                src={images[currentImage]}
                alt={`Seal ${currentImage + 1}`}
                layout='fill'
                objectFit='cover'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50' />
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentImage ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant='ghost'
                size='icon'
                className='absolute top-1/2 left-2 transform -translate-y-1/2 text-white'
                onClick={prevImage}
              >
                <ChevronLeft className='h-6 w-6' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='absolute top-1/2 right-2 transform -translate-y-1/2 text-white'
                onClick={nextImage}
              >
                <ChevronRight className='h-6 w-6' />
              </Button>
            </div>
            <div className='absolute top-2 left-2 flex space-x-2'>
              {/* <Button variant='ghost' size='icon' className='text-white'>
                <ZoomIn className='h-4 w-4' />
              </Button>
              <Button variant='ghost' size='icon' className='text-white'>
                <RotateCw className='h-4 w-4' />
              </Button>
              <Button variant='ghost' size='icon' className='text-white'>
                <Pencil className='h-4 w-4' />
              </Button>
              <Button variant='ghost' size='icon' className='text-white'>
                <Maximize2 className='h-4 w-4' />
              </Button> */}
            </div>
          </CardContent>
          <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-center'>
            One of the many seals soon to be available in the Models of
            Authority database
          </div>
        </Card>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>
            Models of Authority: Scottish Charters and the Emergence of
            Government
          </h2>
          <p className='text-gray-600'>
            Models of Authority is a resource for the study of the contents,
            script and physical appearance of the corpus of Scottish charters
            which survives from 1100–1250. Through close examination of the
            diplomatic and palaeographic features of the charters, the project
            will explore the evidence for developments in the perception of
            royal government during a crucial period in Scottish history.
          </p>
          <p className='text-gray-600'>
            The project is funded by the AHRC (2014-2017) and is a collaboration
            between scholars from the Universities of Glasgow, Cambridge and
            King&apos;s College London.
          </p>
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 p-4'>
            <Button
              className='w-full sm:w-auto hover:text-primary border p-4 hover:border-primary'
              asChild
            >
              <Link href='/about'>Read more about the project</Link>
            </Button>
            <Button className='w-full sm:w-auto' asChild variant='outline'>
              <Link href='/search'>Start searching</Link>
            </Button>
            <Button className='w-full sm:w-auto' asChild variant='outline'>
              <Link href='/images'>Browse images</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
