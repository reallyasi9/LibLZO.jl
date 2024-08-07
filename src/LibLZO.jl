module LibLZO
using LZO_jll: liblzo2

export compress, unsafe_compress!
export decompress, decompress!, unsafe_decompress!
export optimize!, unsafe_optimize!
export compression_level

export AbstractLZOAlgorithm
export LZO1X_1, LZO1X, LZO
export LZO1X_1_11, LZO1X_1_12, LZO1X_1_15, LZO1X_999
export LZO1, LZO1_99
export LZO1A, LZO1A_99
export LZO1B, LZO1B_99
export LZO1C, LZO1C_99, LZO1C_999
export LZO1F_1, LZO1F, LZO1F_999
export LZO1Y_1, LZO1Y, LZO1Y_999
export LZO1Z_999, LZO1Z
export LZO2A_999, LZO2A

"""
    AbstractLZOAlgorithm

An abstract type from which specific LZO compression and decompression algorithms inherit.
"""
abstract type AbstractLZOAlgorithm end

@static if VERSION < v"1.9"
    include("compat.jl")
end

include("init.jl")
include("compress.jl")
include("decompress.jl")
include("optimize.jl")
include("lzo1x.jl")
include("lzo1.jl")
include("lzo1a.jl")
include("lzo1b.jl")
include("lzo1c.jl")
include("lzo1f.jl")
include("lzo1y.jl")
include("lzo1z.jl")
include("lzo2a.jl")
include("lookup.jl")

end
