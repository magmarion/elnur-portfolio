  /**
   * This function filters out falsy values (like undefined, null, or false) 
   * and joins the remaining class names into a single string.
   *
   * Utility function to concatenate a list of class names into a single string.
   *
   * This function takes any number of arguments and returns a string of class names.
   * If any of the arguments are undefined, null, or false, they are ignored.
   *
   * @example
   * cn('foo') // => 'foo'
   * cn('foo', 'bar') // => 'foo bar'
   * cn('foo', undefined, 'bar') // => 'foo bar'
   * cn(undefined, null, false) // => ''
   */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
  }
  