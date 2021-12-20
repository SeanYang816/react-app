import { useState, useEffect, useCallback } from 'react'

const useCompareIndicator = (ref) => {
    const [isShow, setIsShow] = useState(true)

    const checkIndicator = useCallback(() => {
        let prevIndicator = 0
        if (ref.current) {
            ref.current.addEventListener('scroll', ((e) => {
                const { scrollTop, offsetHeight } = ref.current
                const currentIndicator = scrollTop + offsetHeight
                if (currentIndicator > prevIndicator) {
                    prevIndicator = currentIndicator
                    setIsShow(true)
                } else {
                    prevIndicator = currentIndicator
                    setIsShow(false)
                }
            }))
        }
    }, [ref])

    useEffect(() => {
        checkIndicator(ref)
    }, [checkIndicator, ref])
    return isShow
}

export default useCompareIndicator