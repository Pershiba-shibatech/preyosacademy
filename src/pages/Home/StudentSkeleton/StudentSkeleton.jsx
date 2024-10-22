import React from 'react'
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
const StudentSkeleton = () => {
  return (
    <div>
          <SkeletonTheme baseColor="#ece9e9" highlightColor="#e6e5e3">
              <p>
                  <Skeleton height={600} width={800}/>
              </p>
          </SkeletonTheme>
    </div>
  )
}

export default StudentSkeleton
