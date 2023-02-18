import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import RangeSlider from 'rn-range-slider'
import Thumb from 'components/slider-progressbar/slider/Thumb'
import Rail from 'components/slider-progressbar/slider/Rail'
import RailSelected from 'components/slider-progressbar/slider/RailSelected'
import Notch from 'components/slider-progressbar/slider/Notch'
import Label from 'components/slider-progressbar/slider/Lable'
import { Section } from 'tags'

const appWidth = Dimensions.get('window').width

export default function Progressbar() {
  const [low, setLow] = useState()
  const [high, setHigh] = useState()
  const renderThumb = useCallback(() => <Thumb />, [])
  const renderRail = useCallback(() => <Rail />, [])
  const renderRailSelected = useCallback(() => <RailSelected />, [])
  const renderLabel = useCallback((value) => <Label text={value} />, [])
  const renderNotch = useCallback(() => <Notch />, [])
  const handleValueChange = useCallback((low, high) => {
    setLow(low)
    setHigh(high)
  }, [])
  return (
    <Section style={styles.slider}>
      <RangeSlider
        disableRange={true}
        min={0}
        max={30}
        step={5}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
    </Section>
  )
}

const styles = StyleSheet.create({
  slider: {
    width: appWidth * 0.9,
    position: 'absolute'
  }
})
